import { Workbox } from 'workbox-window';

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    console.log('serviceWorker here...');
    const wb = new Workbox(`/sw.js`);

    const showSkipWaitingPrompt = () => {
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });

      wb.messageSkipWaiting();
    };

    wb.addEventListener('waiting', (event) => {
      showSkipWaitingPrompt(event);
    });

    wb.register();

    // window.addEventListener('load', () => {
    //   navigator.serviceWorker
    //     .register('/service-worker.js')
    //     .then((registration) => {
    //       console.log('SW registered: ', registration);
    //     })
    //     .catch((registrationError) => {
    //       console.log('SW registration failed: ', registrationError);
    //     });

    //   console.log('Tah-dah! registerServiceWorker works...');
    //   // const wb = new Workbox('/sw.js');
    //   // wb.register();
    // });
  }
}
