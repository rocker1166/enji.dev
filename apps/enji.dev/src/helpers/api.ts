import { ContentType, ReactionType, ShareType } from '@prisma/client';

export const postReaction = async ({
  slug,
  contentType,
  contentTitle,
  type,
  count,
  section,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
  type: ReactionType;
  count: number;
  section: string;
}) => {
  try {
    await fetch(`/api/reactions/${slug}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contentType, contentTitle, type, count, section }),
    });
  } catch (err) {
    //
  }
};

export const postShare = async ({
  slug,
  contentType,
  contentTitle,
  type,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
  type: ShareType;
}) => {
  try {
    await fetch(`/api/shares/${slug}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contentType, contentTitle, type }),
    });
  } catch (err) {
    //
  }
};

export const postView = async ({
  slug,
  contentType,
  contentTitle,
}: {
  slug: string;
  contentType: ContentType;
  contentTitle: string;
}) => {
  try {
    await fetch(`/api/views/${slug}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contentType, contentTitle }),
    });
  } catch (err) {
    //
  }
};
