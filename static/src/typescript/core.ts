/// <reference path="definitions.d.ts" />


// requirejs imports


// 3rd party libs
/// <amd-dependency path="lodash"/>

// utilities
/// <amd-dependency path="common/utils/$"/>
/// <amd-dependency path="common/utils/ajax"/>
/// <amd-dependency path="common/utils/config"/>
/// <amd-dependency path="common/utils/detect"/>
/// <amd-dependency path="common/utils/mediator"/>
/// <amd-dependency path="common/utils/storage"/>

// modules
/// <amd-dependency path="common/api/GlobalPageManager"/>

// we need some explicit code to force typescript compiler to generate requirejs module structure
module core {
    "use strict";
}
export = core;
