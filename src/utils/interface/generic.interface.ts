import React from 'react';
export interface IDefaultParams {
  isProtected: boolean;
  role: string;
  layout: string;
}

export interface IExtraParams {
  metadata: IDefaultParams;
}

export interface IDefaultLayoutParams {
  children: React.ReactNode;
  params?: IExtraParams;
}

export interface IAdminLayoutParams {
  params: IExtraParams;
  children: React.ReactNode;
}
