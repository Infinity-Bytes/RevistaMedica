//
//  KGInMemoryImageStore.m
//  Pugpig
//
//  Copyright (c) 2011, Kaldor Holdings Ltd.
//  All rights reserved.
//
//  Redistribution and use in source and binary forms, with or without modification, are
//  permitted provided that the following conditions are met:
//
//  Redistributions of source code must retain the above copyright notice, this list of
//  conditions and the following disclaimer. Redistributions in binary form must reproduce
//  the above copyright notice, this list of conditions and the following disclaimer in
//  the documentation and/or other materials provided with the distribution.
//  Neither the name of pugpig nor the names of its contributors may be
//  used to endorse or promote products derived from this software without specific prior
//  written permission.
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
//  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
//  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
//  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
//  BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
//  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
//  IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
//  SUCH DAMAGE.
//

#import "KGInMemoryImageStore.h"

@interface KGInMemoryImageStore()
@property (nonatomic, retain) NSMutableDictionary *store;
- (id)keyForPageNumber:(NSUInteger)pageNumber variant:(NSString*)variant;
@end

@implementation KGInMemoryImageStore

@synthesize store;

- (id)init {
  self = [super init];
  if (self) {
    self.store = [[[NSMutableDictionary alloc] init] autorelease];
  }
  return self;
}

- (void)dealloc {
  [store release];
  [super dealloc];
}

- (void)releaseMemory {
  [store removeAllObjects];
}

- (void)saveImage:(UIImage*)image forPageNumber:(NSUInteger)pageNumber variant:(NSString*)variant {
  [store setObject:image forKey:[self keyForPageNumber:pageNumber variant:variant]];
}

- (UIImage*)imageForPageNumber:(NSUInteger)pageNumber variant:(NSString*)variant {
  return [store objectForKey:[self keyForPageNumber:pageNumber variant:variant]];
}

- (BOOL)hasImageForPageNumber:(NSUInteger)pageNumber variant:(NSString*)variant {
  return [store objectForKey:[self keyForPageNumber:pageNumber variant:variant]] != nil;
}

- (void)removeImageForPageNumber:(NSUInteger)pageNumber variant:(NSString*)variant {
  [store removeObjectForKey:[self keyForPageNumber:pageNumber variant:variant]];
}

- (void)removeImagesForPageNumber:(NSUInteger)pageNumber {
  NSArray *keys = [store allKeys];
  NSString *predicateString = [NSString stringWithFormat:@"self BEGINSWITH '%d-'",pageNumber];
  keys = [keys filteredArrayUsingPredicate:[NSPredicate predicateWithFormat:predicateString]];
  [store removeObjectsForKeys:keys];
}

- (void)removeAllImages {
  [store removeAllObjects];
}

- (id)keyForPageNumber:(NSUInteger)pageNumber variant:(NSString*)variant {
  return [NSString stringWithFormat:@"%d-%@", pageNumber, variant];
}

@end
