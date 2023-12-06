import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { YoutubeTranscript } from 'youtube-transcript';

type Transcript = {
  text: string;
  duration: number;
  offset: number;
};

const getTranscript = async (videoId: string): Promise<Transcript[]> => {
  const transcript = await YoutubeTranscript.fetchTranscript(videoId, {
    country: 'pl',
    lang: 'pl',
  });
  return transcript;
};

const badRequestResponse = () =>
  NextResponse.json(
    {
      response: 'Nie znaleziono napisów dla podanego video',
    },
    {
      status: 400,
    }
  );

const notFoundResponse = () =>
  NextResponse.json(
    {
      response: 'Nie znaleziono napisów dla podanego video',
    },
    {
      status: 404,
    }
  );

export async function GET(request: NextRequest) {
  const searchParams = new URLSearchParams(request.nextUrl.search);
  const name = searchParams.get('video');

  if (!name) {
    return badRequestResponse();
  }

  try {
    const transcript = await getTranscript(name);
    return NextResponse.json(
      {
        response: { transcript },
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    return notFoundResponse();
  }
}
