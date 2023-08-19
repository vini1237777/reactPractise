import { AspectRatio, Skeleton } from '@chakra-ui/react'
import React from 'react'

export const CategoryGridSkelton = ({ratio,testId}) => {
  return (
    <AspectRatio ratio={ratio || 1}>
      <Skeleton data-testid={testId} />
    </AspectRatio>
  );
}

