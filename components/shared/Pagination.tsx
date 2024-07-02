"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationListProps {
    currentPage: number;
    onPageChange: (page: number) => void;
    hasNextPage: boolean;
}

const PaginationList: React.FC<PaginationListProps> = ({ currentPage, onPageChange, hasNextPage }) => {
    const handlePageChange = (page: number) => {
        if (page > 0 && hasNextPage) {
            onPageChange(page);
        }
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        href="#"
                        aria-disabled={currentPage === 1}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(currentPage)}
                        isActive={true}
                    >
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                {hasNextPage && (
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            {currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        href="#"
                        aria-disabled={!hasNextPage}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationList;
