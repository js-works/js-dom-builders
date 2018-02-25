import adaptHtmlFactories from '../internal/helper/adaptHtmlFactories';
import adaptSvgFactories from '../internal/helper/adaptSvgFactories';
import { createElement } from 'js-surface';

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
