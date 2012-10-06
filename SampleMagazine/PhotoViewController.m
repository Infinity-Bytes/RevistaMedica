//
//  PhotoViewController.m
//  SampleMagazine
//
//  Created by David Diaz on 13/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import "PhotoViewController.h"

@interface PhotoViewController ()

@end

@implementation PhotoViewController
@synthesize imagePicker;
@synthesize photoViewDelegate;

- (void)dealloc
{
    self.imagePicker = nil;
    self.photoViewDelegate = nil;
    [super dealloc];
}
- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

-(void)imagePickerController:(UIImagePickerController *)_picker didFinishPickingMediaWithInfo:(NSDictionary *)info{
   
    NSString *mediaType = [info objectForKey:UIImagePickerControllerMediaType];

    if ([mediaType isEqualToString:@"public.image"]){
        UIImage *editedImage = [info objectForKey:UIImagePickerControllerOriginalImage];
        [[self photoViewDelegate] assignJsCallback: _callbackId];
        [[self photoViewDelegate] savePhoto: editedImage];
    }
        
    
    
    [_picker dismissModalViewControllerAnimated:YES];
}
/*
 description: Presents the ImagePickerDelegate as a modalView
 */
- (void)presentFromController:(UIViewController *)_controller withSourceType:(UIImagePickerControllerSourceType)sourceType
{
    self.imagePicker.sourceType = sourceType;
    [_controller presentModalViewController:self.imagePicker animated:YES];
}

-(void)showPhotoViewBefore:(UIViewController *)viewController{
    self.imagePicker = [[[UIImagePickerController alloc] init] autorelease];
    [[self imagePicker] setDelegate: self];
    [self presentFromController: viewController withSourceType:UIImagePickerControllerSourceTypeCamera];
}
-(void) assignJsCallback: (int) callbackId{
    _callbackId = callbackId;
}
- (void)imagePickerControllerDidCancel:(UIImagePickerController *)_picker
{
    [[self photoViewDelegate] assignDefaultBackground];
    [_picker dismissModalViewControllerAnimated:YES];
}
@end
