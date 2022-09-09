export interface stringMap {
    [key: string]: string;
}
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    outlined: BooleanConstructor;
    color: StringConstructor;
    bgcolor: StringConstructor;
    width: StringConstructor;
    height: StringConstructor;
    padding: StringConstructor;
    fontColor: StringConstructor;
    fontWeight: StringConstructor;
    isDisabled: BooleanConstructor;
    isError: BooleanConstructor;
}, unknown, unknown, {
    getFontColor(): string | undefined;
    cssVars(): stringMap;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    outlined: BooleanConstructor;
    color: StringConstructor;
    bgcolor: StringConstructor;
    width: StringConstructor;
    height: StringConstructor;
    padding: StringConstructor;
    fontColor: StringConstructor;
    fontWeight: StringConstructor;
    isDisabled: BooleanConstructor;
    isError: BooleanConstructor;
}>>, {
    outlined: boolean;
    isDisabled: boolean;
    isError: boolean;
}>;
export default _default;
