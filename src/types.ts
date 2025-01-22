export type RootStackParamList = {
  Home: undefined;
  Community: undefined;
  Inbox: { userName: string }; // Update to use userName correctly
  Profile: undefined;
  Cart: undefined;
  ContactUs: undefined;
  Chat: { seller: Seller };
};

export type Seller = {
  id: string;
  name: string;
  message: string;}
