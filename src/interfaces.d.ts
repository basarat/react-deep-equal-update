/// <reference path="../type_definitions/deep-equal.d.ts" />

declare type SubPropSelect = (props: Object) => Object;
declare type UpdateWhenNotDeepEqualDecorator = (subprop?: string | SubPropSelect) => ClassDecorator;

interface Object {
    assign(...objs: Object[]): Object;
}
