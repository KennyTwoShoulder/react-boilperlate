import styles from './PlaygroundPage.module.scss';

import MainPage from 'app/MainPage';

function PlaygroundPage() {
  return (
    <MainPage>
      <svg viewBox="142.274 59.831 241.834 260.678" width="241.834" height="260.678">
        <a className={styles.clickable}>
          <path style={{fill: "rgb(216, 216, 216)", stroke: "rgb(0, 0, 0)"}} d="M 200.063 101.288 L 270.415 59.831 L 326.947 149.655 L 240.892 164.73 L 200.063 101.288 Z"></path>
        </a>
        <a className={styles.clickable}>
          <path style={{fill: "rgb(216, 216, 216)", stroke: "rgb(0, 0, 0)"}} d="M 200.063 100.66 L 142.274 226.288 L 232.098 275.911 L 242.148 164.73 L 200.063 100.66 Z"></path>
        </a>
        <a className={styles.clickable}>
          <path style={{fill: "rgb(216, 216, 216)", stroke: "rgb(0, 0, 0)"}} d="M 232.726 278.424 L 294.284 320.509 L 384.108 252.67 C 384.108 252.67 326.319 150.283 326.319 149.655 C 326.319 149.027 240.892 164.102 240.892 164.102 L 232.726 278.424 Z"></path>
        </a>
      </svg>
    </MainPage>
  );
}

export default PlaygroundPage;