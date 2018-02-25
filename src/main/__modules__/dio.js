import adaptHtmlFactories from '../internal/helper/adaptHtmlFactories';
import adaptSvgFactories from '../internal/helper/adaptSvgFactories';
import dio from 'dio.js';

const
    Html = adaptHtmlFactories(dio.createElement),
    Svg = adaptSvgFactories(dio.createElement);

export default Object.freeze({
    Html,
    Svg
});

export {
    Html,
    Svg
};
