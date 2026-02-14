// node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
    if (modifiers.length) {
        return modifiers.some(modifier => event[modifier]);
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
export { hasModifierKey };
