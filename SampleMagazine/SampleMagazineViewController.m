//
//  SampleMagazineViewController.m
//  SampleMagazine
//
//  Created by David Diaz on 10/09/12.
//  Copyright 2012 David Diaz. All rights reserved.
//

#import "SampleMagazineViewController.h"
#import "KGPagedDocControlImplementation.h"

@implementation SampleMagazineViewController

@synthesize pageControl;
@synthesize thumbnailControl;
@synthesize magazineDelegate;
@synthesize audioPlayer;
@synthesize audioButton;

- (void)dealloc {
    [pageControl release];
    [thumbnailControl release];
    [self setMagazineDelegate:nil];
    [self setAudioPlayer:nil];
    [super dealloc];
}
- (id)init
{
    self = [super init];
    if (self) {
    }
    return self;
}

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {

    }
    return self;
}
- (void)viewDidLoad {
    [super viewDidLoad];
    
    [thumbnailControl setBackgroundColor:[UIColor scrollViewTexturedBackgroundColor]];
    
    if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone) {
        [thumbnailControl setPageSeparation:5];
        [thumbnailControl setPortraitSize:CGSizeMake(60,80)];
        [thumbnailControl setLandscapeSize:CGSizeMake(80,60)];
        [pageControl setScale:0.4166667];
    }
    else {
        [thumbnailControl setPageSeparation:10];
        [thumbnailControl setPortraitSize:CGSizeMake(135,180)];
        [thumbnailControl setLandscapeSize:CGSizeMake(180,135)];
        [pageControl setScale:1.0];
    }
  
    [pageControl setNavigator:thumbnailControl];
  // TODO: uncomment the line below when you're ready to go live
  // [pageControl setImageStore:[[[KGDiskImageStore alloc] init] autorelease]];
    [pageControl setDataSource:[[[KGHTMLManifestDataSource  alloc] initWithPath:@"Data/index.manifest"] autorelease]];
    [pageControl setPageNumber:0];
    [pageControl setScrollEnabled:YES];

    UITapGestureRecognizer *doubleTap = [[[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(toggleNavigator)] autorelease];
    
   
    doubleTap.delegate = self;
    doubleTap.numberOfTapsRequired = 2;
    doubleTap.cancelsTouchesInView = NO;

    [pageControl addGestureRecognizer:doubleTap];
    
    UIWebView * webview = (UIWebView *) [pageControl currentPageView];
    
    KGPagedDocControlImplementation *webviewDelegate = (KGPagedDocControlImplementation * )[webview delegate];
    [webviewDelegate setNativeBridge: [[self magazineDelegate] obtainNativeBridge]];
    [webviewDelegate setMagazineController: self];
    

    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(700, 940, 62, 62)];
    [button setImage:[UIImage imageNamed:@"musicOn.png"] forState:UIControlStateNormal];
    [button setContentMode: UIViewContentModeCenter];
    [button addTarget:self action:@selector(turnDownMusic:) forControlEvents:UIControlEventTouchDown];
    [button setAlpha: 0.4];
    
    [self setAudioButton: button];
    [[self view] addSubview: [self audioButton]];
    [button release];
    [self loadSong:@"02"];
}

- (void)viewDidUnload {
  self.pageControl = nil;
  self.thumbnailControl = nil;
  [super viewDidUnload];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [thumbnailControl setHidden:YES];

}
-(void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    [self validateElementsPosition];
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  [pageControl.imageStore releaseMemory];
  [thumbnailControl.imageStore releaseMemory];  
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
  return YES;
}

- (void)willRotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation duration:(NSTimeInterval)duration {
    [super willRotateToInterfaceOrientation:toInterfaceOrientation duration:duration];
    
    if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone) {
        if (UIInterfaceOrientationIsLandscape(toInterfaceOrientation))
            [pageControl setBounds:CGRectMake(0, 0, 426, 320)];
        else
            [pageControl setBounds:CGRectMake(0, 0, 320, 426)];
    }
}
- (void)didRotateFromInterfaceOrientation:(UIInterfaceOrientation)fromInterfaceOrientation {
    [self validateBedPageOrientation];
    [self validateElementsPosition];
}
-(void) validateElementsPosition{
    UIInterfaceOrientation orientation = [UIApplication sharedApplication].statusBarOrientation;
    if(UIInterfaceOrientationIsLandscape(orientation)){;
        [[self audioButton] setFrame:CGRectMake(940, 685, 62, 62)];
    }
    else{
        [[self audioButton] setFrame:CGRectMake(700, 940, 62, 62)];
    }
}

-(void) validateBedPageOrientation{
    UIInterfaceOrientation orientation = [UIApplication sharedApplication].statusBarOrientation;
    if(UIInterfaceOrientationIsLandscape(orientation))
        [[self magazineDelegate] sendPhotoBackgorundOrientation: @"landscape"];
    else
        [[self magazineDelegate] sendPhotoBackgorundOrientation:@"portrait"];
    
}

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)recognizer shouldRecognizeSimultaneouslyWithGestureRecognizer:(UIGestureRecognizer *)otherGestureRecognizer {
  return YES;
}


- (void)toggleNavigator {
  [thumbnailControl setHidden:![thumbnailControl isHidden] animationStyle:KGAnimationSlideDown|KGAnimationFade duration:0.5];
}

-(void) loadSong: (NSString *) name{
    NSString *soundPath =[[NSBundle mainBundle] pathForResource:name ofType:@"mp3"];
    NSURL *soundURL = [NSURL fileURLWithPath:soundPath];
    NSError *error;
    [self setAudioPlayer: [[[AVAudioPlayer alloc] initWithContentsOfURL:soundURL error:&error] autorelease]];
    [[self audioPlayer] setVolume:1];
    [[self audioPlayer] setDelegate:self];
    [[self audioPlayer] setNumberOfLoops:-1];
    [[self audioPlayer] play];
}
-(void) stopSong{
    if([self audioPlayer]){
        [[self audioPlayer] stop];
    }
}

-(UIViewController *)getViewController{
    return self;
}

-(UIWebView *)getCurrentWebView{
    return (UIWebView *) [pageControl currentPageView];
}
-(IBAction)turnDownMusic:(id)sender{
    [[self audioPlayer] pause];
    [[self audioButton] setImage:[UIImage imageNamed:@"musicOff.png"] forState:UIControlStateNormal];
    [[self audioButton] addTarget:self action:@selector(turnOnMusic:) forControlEvents:UIControlEventTouchDown];
}

-(IBAction)turnOnMusic:(id)sender{
    [[self audioPlayer] play];
    [[self audioButton] setImage:[UIImage imageNamed:@"musicOn.png"] forState:UIControlStateNormal];
    [[self audioButton] addTarget:self action:@selector(turnDownMusic:) forControlEvents:UIControlEventTouchDown];
}

@end
