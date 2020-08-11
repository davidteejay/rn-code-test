#import "GetServiceKey.h"
#import <UIKit/UIKit.h>

@implementation GetServiceKey

//export the name of the native module as 'Device' since no explicit name is mentioned
RCT_EXPORT_MODULE();

//exports a method getServiceKey to javascript
RCT_EXPORT_METHOD(getServiceKey:(RCTResponseSenderBlock)callback){
 @try{
   NSString *serviceKey = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"SERVICE_KEY"];
   callback(@[[NSNull null], serviceKey]);
 }
 @catch(NSException *exception){
   callback(@[exception.reason, [NSNull null]]);
 }
}

@end
