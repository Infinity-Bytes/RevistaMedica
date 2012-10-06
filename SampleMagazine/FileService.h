//
//  FileService.h
//  SampleMagazine
//
//  Created by David Diaz on 13/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "IFileService.h"

@interface FileService : NSObject<IFileService>{
    int _callbackId;
    int count;
}

@end
