import adaptHtmlFactories from '../internal/helper/adaptHtmlFactories';
import adaptSvgFactories from '../internal/helper/adaptSvgFactories';

import React from 'react';

const
    Html = adaptHtmlFactories(React.createElement),
    Svg = adaptSvgFactories(React.createElement);

export default Object.freeze({
    Html,
    Svg
});

export {
    Html,
    Svg
};
