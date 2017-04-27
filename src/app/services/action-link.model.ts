'use strict';

export class ViewAction {
  actionType: string;
  objectClass: string;
  objectType: string;
  whatToView: string;
  whereToView: string;
};

export class ActionLink {
  surfaceType: string;
  displayText: string;
  actionType: string;
  actions: ViewAction[];
};
