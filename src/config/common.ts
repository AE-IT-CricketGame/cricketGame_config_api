import { SERVICE_PROVIDERS } from './const';

export const mobileGenerator = (mobile: string) => {
  return `+94${mobile.substring(1)}`;
};

export const mobileGeneratorWithOutPlus = (mobile: string) => {
  return `94${mobile.substring(1)}`;
};

export const _checkDuplicateNumber = async (csvDataArr) => {
  return [...new Set(csvDataArr)];
};

export const generateNumber = (length) => {
  const digits = '0123456789';
  let NumberText = '';
  for (let i = 0; i < length; i++) {
    NumberText += digits[Math.floor(Math.random() * 10)];
  }

  const decryptedOTP = (Number(NumberText) * 120) / 22;
  return { otp: NumberText, decryptedOTP };
};

export const generateStringHash = (length: number) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  return randomString;
};

export const validateServiceProvider = async (msisdn: string) => {
  console.log(msisdn)
    const firstThreeDigits = msisdn.slice(0, 3);
    const firstFourDigits = msisdn.slice(0, 4);

    if (firstThreeDigits === "071" || firstThreeDigits === "070" || firstFourDigits === "9471" || firstFourDigits === "9470") {
      return SERVICE_PROVIDERS.MOBITEL;
    } else if (firstThreeDigits === "078" || firstFourDigits === "9478" || firstThreeDigits === "072" || firstFourDigits === "9472") {
      return SERVICE_PROVIDERS.HUTCH;
    } else if (firstThreeDigits === "077" || firstThreeDigits === "076" || firstFourDigits === "9477" || firstFourDigits === "9476" || firstFourDigits === "9474" || firstThreeDigits === "074") {
      return SERVICE_PROVIDERS.DIALOG;
    } else {
        return "Other"
    }

};


