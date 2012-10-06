//
//  INativeBridge.h
//  SampleMagazine
//
//  Created by David Diaz on 14/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol INativeBridge <NSObject>

- (void) validateRequesString: (NSString *) requestString;
- (void)returnResult:(int)callbackId webView: (UIWebView *)webView args:(id)arg, ...;
- (id<INativeBridge>) obtainNativeBridge;
-(void) executeJsMethod: (NSString *) method inWebview: (UIWebView *) webView;

@end
