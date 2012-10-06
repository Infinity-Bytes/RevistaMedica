//
//  IMagazineController.h
//  SampleMagazine
//
//  Created by David Diaz on 11/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol IMagazineViewController <NSObject>

-(UIViewController *) getViewController;
-(UIWebView *) getCurrentWebView;
-(void) validateBedPageOrientation;
@end
