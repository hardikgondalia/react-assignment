type UserProfile = {
  name: string;
  avatar?: string;
};

export type HeaderProps = {
  title?: string;
  onLogout: () => void;
  userProfile?: UserProfile;
};