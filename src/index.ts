import nudgeerSafe from './helpers/nudgeer-safe';
/**
 * @module nudgeer-safe
 */
(async()=>{console.log(await nudgeerSafe({framework:'NextJs',includeConfig:true}))})()
module.exports = nudgeerSafe;
