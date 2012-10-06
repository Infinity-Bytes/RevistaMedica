//
//  AppDelegate.h
//  SampleMagazine
//
//  Created by David Diaz on 11/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "MasterControl.h"


@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic)UIWindow *window;
@property (retain,nonatomic) MasterControl * masterControl;

@end
