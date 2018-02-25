import tagNames from '../tag/htmlTagNames';

export default function adaptHtmlFactories(createElement) { 
    const ret = {};

    for (let i = 0; i < tagNames.length; ++i) {
        const tagName = tagNames[i];

        ret[tagName] = createElement.bind(null, tagName);
    }

    return ret;
}
