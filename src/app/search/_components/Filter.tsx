import { CloseIcon } from '@/assets/images/icons/CloseIcon';
import { Flex, Stack } from '@/components';

export function Filter() {
  return (
    <Stack className='gap-4'>
      <Flex className='justify-between'>
        <p className='text-base'>Price</p>
      </Flex>
    </Stack>
  );
}
