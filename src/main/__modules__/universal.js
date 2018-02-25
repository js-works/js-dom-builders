import adaptHtmlFactories from '../internal/helper/adaptHtmlFactories';
import adaptSvgFactories from '../internal/helper/adaptSvgFactories';

const
    Html = adaptHtmlFactories(createElement),
    Svg = adaptSvgFactories(createElement);

export default Object.freeze({
    Html,
    Svg
});

export {
    Html,
    Svg
};

// --- locals ------------------------------------------------------

function createElement(/* type, props, ...children */) {
    const
        argCount = arguments.length,
        type = arguments[0],
        props = arguments[1],
        children = argCount < 3 ? null : new Array(argCount - 2);

    if (children) {
        for (let i = 2; i < argCount; ++i) {
            children[i - 2] = arguments[i];
        }
    }

    return {
        type,
        props,
        children,
        isElement: true
    };
}
