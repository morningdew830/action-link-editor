'use strict';

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

export const AllActions = ['dispatcher', 'jsonForm', 'url', 'component', 'email', 'message'];
export const AllEvents = ['Click', 'Hover', 'DblClick'];
export const AllFields = ['spacePx', 'align','tooltipExpr', 'textExpr','icon', 'assetGuid'];
export const WindowMethods = ['Same Window', 'New Window', 'Modal Pop-up'];
export const DispatchMethods = ['PANEL', 'VIEW_WEB', 'VIEW_PRINT', 
  'EDITOR', 'EXPORT_PDF', 'EXPORT_CSV', 'EXPORT_NATIVE', 'PRETTY_EXCEL', 
  'EXTERNAL_LINK', 'RUN2CACHE', 'TOOLBAR', 'FOOTER', 'LISTING', 'PROMPTS', 
  'FIND', 'UI_CREATE', 'UI_UPDATE', 'UI_DELETE'
];

export type Presentation = {
  label: string;
  name: string;
  fields: string[];
  actions: string[];
};

export const Presentations: Presentation[] = [
  {
    label: 'Spacer',
    name: 'spacer',
    fields: ['spacePx'],
    actions: [],
  },
  {
    label: 'Selector',
    name: 'selector',
    fields: ['children', 'align'],
    actions: [],
  },
  {
    label: 'Link',
    name: 'link',
    fields: ['tooltipExpr', 'textExpr', 'align'],
    actions: AllActions,
  },
  {
    label: 'Button',
    name: 'button',
    fields: ['tooltipExpr', 'textExpr', 'align', 'icon'],
    actions: AllActions,
  },
  {
    label: 'Icon',
    name: 'icon',
    fields: ['icon', 'align'],
    actions: AllActions,
  },
  {
    label: 'Component',
    name: 'component',
    fields: ['componentFnExpr', 'align', 'assetGuid'],
    actions: AllActions,
  },
];
