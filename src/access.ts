/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    // 1 == 管理员
    canAdmin: currentUser && currentUser.userRole === 1,
  };
}
