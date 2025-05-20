"use client";

import React from 'react';

type InstructorAvatarProps = {
  name: string;
  imgUrl?: string;
};

export default function InstructorAvatar({ name, imgUrl }: InstructorAvatarProps) {
  return (
    <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center overflow-hidden">
      {imgUrl ? (
        <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-lg font-bold text-primary">{name[0]}</span>
      )}
    </div>
  );
} 