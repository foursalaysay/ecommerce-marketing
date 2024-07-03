/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/EJRU5Rfod2V
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useMemo, JSX, SVGProps } from "react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function Products() {
  const products = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Acme Wireless Headphones",
      description: "Experience immersive audio with our premium headphones.",
      category: "Electronics",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Ergonomic Office Chair",
      description: "Upgrade your workspace with our comfortable and stylish chair.",
      category: "Furniture",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Outdoor Adventure Backpack",
      description: "Explore the great outdoors with our durable and versatile backpack.",
      category: "Outdoor",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Smart Home Automation Kit",
      description: "Simplify your life with our cutting-edge home automation solutions.",
      category: "Electronics",
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Luxury Bedding Set",
      description: "Elevate your sleep experience with our premium bedding collection.",
      category: "Furniture",
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Portable Bluetooth Speaker",
      description: "Enjoy high-quality sound on the go with our compact speaker.",
      category: "Electronics",
    },
  ]
  const [selectedCategory, setSelectedCategory] = useState([])
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory.length === 0) return true
      return selectedCategory.includes(product.category)
    })
  }, [selectedCategory, products])
  const handleCategoryChange = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((cat) => cat !== category))
    } else {
      setSelectedCategory([...selectedCategory, category])
    }
  }
  return (
    <div className="w-full min-h-screen bg-background">
      <header className="flex items-center justify-between bg-primary text-primary-foreground p-4 md:p-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold text-lg">Acme Inc</span>
        </Link>
        <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground" prefetch={false}>
          <ArrowLeftIcon className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Link>
      </header>
      <div className="container mx-auto grid md:grid-cols-[240px_1fr] gap-6 p-4 md:p-6">
        <div className="bg-muted rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox
                checked={selectedCategory.includes("Electronics")}
                onCheckedChange={() => handleCategoryChange("Electronics")}
              />
              Electronics
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox
                checked={selectedCategory.includes("Furniture")}
                onCheckedChange={() => handleCategoryChange("Furniture")}
              />
              Furniture
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox
                checked={selectedCategory.includes("Outdoor")}
                onCheckedChange={() => handleCategoryChange("Outdoor")}
              />
              Outdoor
            </Label>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt={product.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button size="sm" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
