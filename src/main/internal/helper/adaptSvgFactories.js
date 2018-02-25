import tagNames from '../tag/svgTagNames';

export default function adaptSvgFactories(createElement) { 
    const ret = {};

    for (let i = 0; i < tagNames.length; ++i) {
        const tagName = tagNames[i];

        ret[tagName] = createElement.bind(null, tagName);
    }

    return ret;
}
