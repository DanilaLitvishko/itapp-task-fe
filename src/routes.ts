const USER_ACCOUNT_PATH = '/account';
const ADMIN_PATH = '/admin';

const Routes = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  RESET_PASSWORD: '/reset-password',
  PASSWORD_RECOVERY: '/passwordRecovery',

  USER_ACCOUNT: USER_ACCOUNT_PATH,
  USER_ACCOUNT_MANAGE_PLAN: `${USER_ACCOUNT_PATH}/manage-plan`,
  USER_ACCOUNT_PURCHASE_HISTORY: `${USER_ACCOUNT_PATH}/purchase-history`,
  USER_ACCOUNT_EDIT: `${USER_ACCOUNT_PATH}/edit`,
  USER_ACCOUNT_UPDATE_PASSWORD: `${USER_ACCOUNT_PATH}/update-password`,
  USER_ACCOUNT_CREDIT_CARD: `${USER_ACCOUNT_PATH}/credit-card`,

  CONTACT_US: '/contact-us',
  MANAGE_PLAN: `${USER_ACCOUNT_PATH}/manage-plan`,
  CHAT: '/chat',

  ADMIN_USERS_GRID: `${ADMIN_PATH}/users`,
  ITEMS_SUBSCRIPTIONS_GRID: `${ADMIN_PATH}/items`,
  CATEGORIES_GRID: `${ADMIN_PATH}/categories`,

  USER_POSTS_GRID: `${USER_ACCOUNT_PATH}/posts`,
  USER_BLOGS_GRID: `${USER_ACCOUNT_PATH}/blogs`,

  ABOUT_US: '/about',
  COOKIE_POLICY: '/cookie-policy',
  FAQ: '/faq',
  PRIVACY_POLICY: '/privacy-policy',
  ACCOUNT_ACTIVATED: '/activate',
  NOT_AUTHORIZED: '/not-authorized',

  BLOG: '/blog',
  BLOG_DETAIL: '/blog/:blogId',
  BLOG_POST_DETAIL: '/blog/posts/:postId',
};

export default Routes;
