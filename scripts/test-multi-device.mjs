import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9446',
  '--user-data-dir=C:/Users/KevinAdisuryaNugraha/AppData/Local/Temp/chrome-dbg5',
  'http://localhost:4173'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const res = await fetch('http://127.0.0.1:9446/json');
  const tabs = await res.json();
  const page = tabs.find(t => t.type === 'page');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  const send = (method, params = {}) => new Promise(resolve => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === id) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const testViewports = [
    { name: 'Ultra-small Mobile (320px)', width: 320, height: 640 },
    { name: 'Standard Android (360px)', width: 360, height: 800 },
    { name: 'iPhone 13/14/15 (390px)', width: 390, height: 844 },
    { name: 'Large Phone / Plus (412px)', width: 412, height: 915 },
    { name: 'Tablet iPad Portrait (768px)', width: 768, height: 1024 },
    { name: 'Tablet iPad Landscape (1024px)', width: 1024, height: 768 },
    { name: 'Standard Laptop (1280px)', width: 1280, height: 800 },
    { name: 'Full HD Desktop (1920px)', width: 1920, height: 1080 }
  ];

  console.log('Testing Multi-Device Responsive Layout:\n');

  for (const vp of testViewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: vp.width < 1024
    });

    await new Promise(r => setTimeout(r, 200));

    const check = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const docW = document.documentElement.clientWidth;
          const scrollW = document.documentElement.scrollWidth;
          const bad = [];
          document.querySelectorAll('*').forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.right > docW + 1) {
              bad.push({ tag: el.tagName, class: (el.className ? el.className.toString().slice(0, 30) : ''), right: r.right, left: r.left, width: r.width, docW });
            }
          });
          return JSON.stringify({ docW, scrollW, badCount: bad.length, bad: bad.slice(0, 5) });
        })()
      `,
      returnByValue: true
    });

    const parsed = JSON.parse(check.result.value);
    console.log(`${vp.name}:`);
    console.log(`  - docWidth: ${parsed.docW}px | scrollWidth: ${parsed.scrollW}px`);
    console.log(`  - Overflows: ${parsed.badCount} ${parsed.badCount === 0 ? '✔ PERFECT' : '✖ FAILED: ' + JSON.stringify(parsed.bad)}`);
  }

  ws.close();
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
}
