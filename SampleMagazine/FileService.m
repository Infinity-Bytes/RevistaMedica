//
//  FileService.m
//  SampleMagazine
//
//  Created by David Diaz on 13/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import "FileService.h"

@implementation FileService

-(void) saveImage:(UIImage*) image{
    count ++;
    NSFileManager *filemgr;
    filemgr = [NSFileManager defaultManager];
    
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *imagePath = [ documentsDirectory stringByAppendingString:@"/bphoto.png"];
    NSData *imageData = UIImagePNGRepresentation(image);
    NSError *error = nil;
    
    
    if ([filemgr fileExistsAtPath: imagePath ] == YES)
        [filemgr removeItemAtPath: imagePath error:&error];
    
    if(!error){
        error = nil;
        [imageData writeToFile:imagePath options:NSDataWritingAtomic error:&error];
    }
        
    if(!error)
        [self sendRefreshNotification];
}

-(void) sendRefreshNotification{
    
    NSMutableDictionary *userInfo = [NSMutableDictionary dictionary];
    [userInfo setObject:[NSString stringWithFormat:@"%d", _callbackId]  forKey:@"callbackId"];
    
    NSNotification * notification = [NSNotification notificationWithName:@"refreshImage" object:self userInfo:userInfo];
    
    [[NSNotificationQueue defaultQueue]
     enqueueNotification: notification
     postingStyle:NSPostWhenIdle
     coalesceMask:NSNotificationCoalescingOnName
     forModes:nil];
}

-(void) assignJsCallback: (int) callbackId{
    _callbackId = callbackId;
}

@end
