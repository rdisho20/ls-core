interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  if (!userInfo.hasOwnProperty('email')) {
    userInfo.email = "N/A";
  }

  if (!userInfo.hasOwnProperty('age')) {
    userInfo.age = "unknown";
  }

  return `${userInfo.name} ${userInfo.email} ${userInfo.age}`
}