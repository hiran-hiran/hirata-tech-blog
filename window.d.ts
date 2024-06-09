interface Window {
  // GTM用の拡張
  //   dataLayer: object[];
  // フィーチャーフラグ用
  //   featureFlag: {
  //     activate: (key: FeatureFlag) => void;
  //     deactivate: (key: FeatureFlag) => void;
  //     clear: () => void;
  //   };
  gtag: any;
}

declare global {
  const window = Window;
}
