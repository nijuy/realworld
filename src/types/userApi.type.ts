/**
 * @CRUD post
 * @ACTION login
 */
export interface ILoginUserData {
  email: string;
  password: string;
}

/**
 * @CRUD post
 * @ACTION join
 */
export interface IJoinUserData {
  username: string;
  email: string;
  password: string;
}

/**
 * @CRUD put
 * @ACTION edit
 */
export interface IEditUserData {
  username: string;
  email: string;
  password: string;
  bio: string;
  image: string;
}

/**
 * @CRUD get
 * @ACTION getCurrentUser
 */
export interface IGlobalUserData {
  user: { username: string; email: string; token: string; bio: string; image: string };
}

/**
 * @CRUD get
 * @ACTION getProfile
 */
export interface IProfileResponse {
  profile: IProfile;
}

export interface IProfile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
