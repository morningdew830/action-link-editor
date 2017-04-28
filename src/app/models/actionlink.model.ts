'use strict';

export class ViewAction {
  actionType: string;
  objectClass: string;
  objectType: string;
  whatToView: string;
  whereToView: string;
};

export class ActionLinkForm {
  surfaceType: string;
  displayText: string;
  actionType: string;
  actions: ViewAction[];
};

export type DispatcherAction = {
  assetGuid: string;
  method: string;
  window: string;
};

export type JsonFormAction = {
  formSpec: string;
  window: string;
};

export type UrlAction = {
  urlExpr: string;
  window: string;
};

type Place = {
  zoneId: string;
  displacedDisposition: string;
  undoInSecs: number;
  transition: string;
};

export type ComponentAction = {
  componentId: string;
  method: string;
  load?: any;
  params?: any;
  properties?: any;
  place?: Place;
};

export type EmailAction = {
  emailAddrExpr: string;
  ccEmailAddrExpr?: string;
  bccEmailAddrExpr?: string;
  subjectExpr: string;
  messageExpr: string;
};

export type MessageAction = {
  titleExpr?: string;
  messageExpr: string;
  box?: string;
  window?: string;
};

export type Action = {
  cmdType: string;
  capabilityCode?: string;
  cmdTypeExpr?: string;
  tokens?: string;
  dispatcher?: DispatcherAction;
  jsonForm?: JsonFormAction;
  url?: UrlAction;
  component?: ComponentAction;
  email?: EmailAction;
  message?: MessageAction;
};

export default class ActionLink {
  presentation: string;
  componentFnExpr?: any;
  icon?: string;
  align?: string;
  textExpr?: string;
  mouseoverExpr?: any;
  children?: ActionLink[];
  spacePx?: number;
  tooltipExpr?: string;
  assetGuid?: string;
  click?: Action[];
  hover?: Action[];
  dblClick?: Action[];
};

export const Actions = ['dispatcher', 'jsonForm', 'url', 'component', 'email', 'message'];
export const Events = ['Click', 'Hover', 'DblClick'];
export const WindowMethods = ['Same Window', 'New Window', 'Modal Pop-up'];
export const DispatchMethods = ['PANEL', 'VIEW_WEB', 'VIEW_PRINT', 
  'EDITOR', 'EXPORT_PDF', 'EXPORT_CSV', 'EXPORT_NATIVE', 'PRETTY_EXCEL', 
  'EXTERNAL_LINK', 'RUN2CACHE', 'TOOLBAR', 'FOOTER', 'LISTING', 'PROMPTS', 
  'FIND', 'UI_CREATE', 'UI_UPDATE', 'UI_DELETE'
];

export type Presentation = {
  label: string;
  name: string;
  fileds: string[];
  actions: string[];
};

export const Presentations: Presentation[] = [
  {
    label: 'Spacer',
    name: 'spacer',
    fileds: ['spacePx'],
    actions: [],
  },
  {
    label: 'Selector',
    name: 'selector',
    fileds: ['children', 'align'],
    actions: [],
  },
  {
    label: 'Link',
    name: 'link',
    fileds: ['tooltipExpr', 'textExpr', 'align'],
    actions: Actions,
  },
  {
    label: 'Button',
    name: 'button',
    fileds: ['tooltipExpr', 'textExpr', 'align', 'icon'],
    actions: Actions,
  },
  {
    label: 'Icon',
    name: 'icon',
    fileds: ['icon', 'align'],
    actions: Actions,
  },
  {
    label: 'Component',
    name: 'component',
    fileds: ['componentFnExpr', 'align', 'assetGuid'],
    actions: Actions,
  },
];
