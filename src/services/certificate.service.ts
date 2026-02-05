import { SuccessResponse } from "../dtos/response.dto";
import { certificates } from "../generated/prisma/client";
import { findCertificatesRepo } from "../repositories/certificate.repository";

export async function getListCertificatesService(): Promise<
    SuccessResponse<certificates[]>
> {
    const certificates = await findCertificatesRepo();

    return {
        success: true,
        message: "Successfully retrieved list of certificates",
        data: certificates,
    };
}
