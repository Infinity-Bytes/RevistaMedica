//
//  MasterControl.m
//  SampleMagazine
//
//  Created by David Diaz on 11/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import "MasterControl.h"

@implementation MasterControl

@synthesize magazineController;
@synthesize photoController;
@synthesize fileService;
@synthesize nativeBridge;

- (void)dealloc
{
    [self setNativeBridge: nil];
    [self setFileService:nil];
    [self setMagazineController: nil];
    [self setPhotoController: nil];
    [super dealloc];
}
- (id)init
{
    self = [super init];
    if (self) {
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(refreshImage:) name:@"refreshImage" object:nil];
    }
    return self;
}

-(void) savePhoto:(UIImage*) image{
    [[self fileService] saveImage: image];
}

-(void) refreshImage:  (NSNotification *) notificacion{
    NSDictionary *userInfo = [notificacion userInfo];
    UIWebView * webview = [magazineController getCurrentWebView];
    double myDouble = [[userInfo objectForKey:@"callbackId"] doubleValue];
    int callbackId = (int)(myDouble + (myDouble>0 ? 0.5 : -0.5));
    [[self nativeBridge] returnResult: callbackId webView:webview args:nil];
}

-(id<INativeBridge>) obtainNativeBridge{
    return [[self nativeBridge] obtainNativeBridge];
}

-(void)handleCall:(NSString*)functionName args:(NSArray*)args callback: (int) callbackId{
    
    if ([functionName isEqualToString:@"showPhotoViewBefore"]){
        [[self photoController] assignJsCallback: callbackId];
        [[self photoController] showPhotoViewBefore: [[self magazineController] getViewController]];
    }
    if ([functionName isEqualToString:@"validateOrientation"]) {
        UIWebView * webview = [magazineController getCurrentWebView];
        [[self magazineController] validateBedPageOrientation];
        [[self nativeBridge] returnResult:callbackId webView:webview args:nil];

    }
}
-(void) assignJsCallback: (int) callbackId{
    [[self fileService] assignJsCallback: callbackId];
}

-(void)assignDefaultBackground{
    UIWebView * webview = [magazineController getCurrentWebView];
    [[self nativeBridge] executeJsMethod:@"photoViewController.obtainBackgroundPhoto();" inWebview:webview];
}

-(void) sendPhotoBackgorundOrientation: (NSString *) orientation{
    UIWebView * webview = [magazineController getCurrentWebView];
    if([orientation isEqualToString:@"portrait"])
        [[self nativeBridge] executeJsMethod:@"if(photoViewController)photoViewController.changeToPortrait();" inWebview:webview];
    if([orientation isEqualToString:@"landscape"])
        [[self nativeBridge] executeJsMethod:@"if(photoViewController)photoViewController.changeToLandscape();" inWebview:webview];
}
@end
