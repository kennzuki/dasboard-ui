'use client';

import BackButton from '@/components/ui/Bacbutton';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import posts from '@/data/post';

const PostEditPage = () => {
  return (
    <>
      <BackButton text='Back to posts' link='/posts' />
    </>
  );
};

export default PostEditPage;
