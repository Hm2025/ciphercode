import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp'])

async function collectImages(directory: string, rootDirectory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const nestedImages = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      return collectImages(entryPath, rootDirectory)
    }

    if (entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      return [path.relative(rootDirectory, entryPath)]
    }

    return []
  }))

  return nestedImages.flat()
}

export async function GET() {
  const imageRoot = path.join(process.cwd(), 'public', 'IMAGES')
  const relativePaths = await collectImages(imageRoot, imageRoot)
  const images = relativePaths.map((relativePath) => {
    const segments = relativePath.split(path.sep)
    const filename = segments.at(-1) ?? relativePath

    return {
      src: `/IMAGES/${segments.map(encodeURIComponent).join('/')}`,
      category: segments[0],
      title: path.parse(filename).name.replace(/[-_]+/g, ' '),
    }
  }).sort((first, second) => first.category.localeCompare(second.category) || first.title.localeCompare(second.title, undefined, { numeric: true }))

  return NextResponse.json(images, {
    headers: { 'Cache-Control': 'public, max-age=60, s-maxage=300' },
  })
}