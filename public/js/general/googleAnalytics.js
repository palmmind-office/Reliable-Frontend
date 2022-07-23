/**
 * Includes all the functionalities for google analytics.
 */
export var googleAnalytics = {
    /**
     * @param {*} obj should be an object of following fields
     * hitType, eventCategory, eventAction, eventLabel.
     * ga stands for google analytics.
     */
    recordEvent: function(obj){
        ga('send', {
            hitType: obj.hitType || 'event',
            eventCategory: obj.eventCategory || 'bot',
            eventAction: obj.eventAction || null,
            eventLabel: obj.eventLabel || null
        });
    }
}