//
//  SampleMagazineViewController.h
//  SampleMagazine
//
//  Created by David Diaz on 10/09/12.
//  Copyright 2012 David Diaz. All rights reserved.
//

#import <AVFoundation/AVFoundation.h>
#import "Pugpig.h"
#import "IMagazineViewController.h"
#import "IMagazineDelegate.h"

@interface SampleMagazineViewController : UIViewController<UIGestureRecognizerDelegate,  AVAudioPlayerDelegate, IMagazineViewController> {

}

@property (nonatomic, retain) IBOutlet KGPagedDocControl *pageControl;
@property (nonatomic, retain) IBOutlet KGPagedDocThumbnailControl *thumbnailControl;
@property(nonatomic, retain) AVAudioPlayer * audioPlayer;
@property(nonatomic, retain) UIButton* audioButton;

@property(nonatomic, retain) id<IMagazineDelegate> magazineDelegate;



@end
