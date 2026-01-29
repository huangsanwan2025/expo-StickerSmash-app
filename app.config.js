const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.hlb.stickersmash.dev';
  }

  if (IS_PREVIEW) {
    return 'com.hlb.stickersmash.preview';
  }

  return 'com.hlb.stickersmash';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)';
  }

  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)';
  }

  return 'StickerSmash: Emoji Stickers';
};


export default ({ config }) => {
  return ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    buildNumber: '1',
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    versionCode: '1',
    package: getUniqueIdentifier(),
  },
})
};
