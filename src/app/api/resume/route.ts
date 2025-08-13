import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(
      process.cwd(),
      'src',
      'assets',
      'pdfs',
      'JonathanMaskew_Resume_SoftwareEngineer.pdf'
    );
    const fileBuffer = readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          'inline; filename="JonathanMaskew_Resume_SoftwareEngineer.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}
