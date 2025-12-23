import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import NFTBox from "./NFTBox"
import Link from "next/link"
import { request } from "graphql/request"
import { formatPrice } from "../utils/formatPrice"

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!

interface ActiveListing {
    nftAddresses: string
    tokenId: string
    price: string
    seller: string
    blockNumber: Number
}

export default function RecentlyListedNFT() {
    
}