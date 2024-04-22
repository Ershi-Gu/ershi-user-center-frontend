// @ts-ignore
/* eslint-disable */

declare namespace API {

  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description: string;
  }

  type CurrentUser = {
    id: number;
    userName?: string;
    userAccount: string;
    avatarUrl?: string;
    gender?: number;
    phoneNum?: string;
    email?: string;
    createTime: Date;
    updateTime: Date;
    userStatus: number;
    userRole: number;
  };

  type LoginResult = {
    id: number;
    userName?: string;
    userAccount: string;
    avatarUrl?: string;
    gender?: number;
    phoneNum?: string;
    email?: string;
    createTime: Date;
    updateTime: Date;
    userStatus: number;
    userRole: number;
  };

  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    invitationCode?: string;
    checkPassword?: string; // ? 表示可选

    type?: string;
  };


  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
