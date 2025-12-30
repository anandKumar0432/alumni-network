import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ApprovalLog
 *
 */
export type ApprovalLogModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalLogPayload>;
export type AggregateApprovalLog = {
    _count: ApprovalLogCountAggregateOutputType | null;
    _min: ApprovalLogMinAggregateOutputType | null;
    _max: ApprovalLogMaxAggregateOutputType | null;
};
export type ApprovalLogMinAggregateOutputType = {
    id: string | null;
    targetType: $Enums.Role | null;
    targetId: string | null;
    oldStatus: $Enums.Status | null;
    newStatus: $Enums.Status | null;
    actionById: string | null;
    createdAt: Date | null;
};
export type ApprovalLogMaxAggregateOutputType = {
    id: string | null;
    targetType: $Enums.Role | null;
    targetId: string | null;
    oldStatus: $Enums.Status | null;
    newStatus: $Enums.Status | null;
    actionById: string | null;
    createdAt: Date | null;
};
export type ApprovalLogCountAggregateOutputType = {
    id: number;
    targetType: number;
    targetId: number;
    oldStatus: number;
    newStatus: number;
    actionById: number;
    createdAt: number;
    _all: number;
};
export type ApprovalLogMinAggregateInputType = {
    id?: true;
    targetType?: true;
    targetId?: true;
    oldStatus?: true;
    newStatus?: true;
    actionById?: true;
    createdAt?: true;
};
export type ApprovalLogMaxAggregateInputType = {
    id?: true;
    targetType?: true;
    targetId?: true;
    oldStatus?: true;
    newStatus?: true;
    actionById?: true;
    createdAt?: true;
};
export type ApprovalLogCountAggregateInputType = {
    id?: true;
    targetType?: true;
    targetId?: true;
    oldStatus?: true;
    newStatus?: true;
    actionById?: true;
    createdAt?: true;
    _all?: true;
};
export type ApprovalLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalLog to aggregate.
     */
    where?: Prisma.ApprovalLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApprovalLogs to fetch.
     */
    orderBy?: Prisma.ApprovalLogOrderByWithRelationInput | Prisma.ApprovalLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApprovalLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApprovalLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApprovalLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ApprovalLogs
    **/
    _count?: true | ApprovalLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalLogMaxAggregateInputType;
};
export type GetApprovalLogAggregateType<T extends ApprovalLogAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalLog[P]> : Prisma.GetScalarType<T[P], AggregateApprovalLog[P]>;
};
export type ApprovalLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalLogWhereInput;
    orderBy?: Prisma.ApprovalLogOrderByWithAggregationInput | Prisma.ApprovalLogOrderByWithAggregationInput[];
    by: Prisma.ApprovalLogScalarFieldEnum[] | Prisma.ApprovalLogScalarFieldEnum;
    having?: Prisma.ApprovalLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalLogCountAggregateInputType | true;
    _min?: ApprovalLogMinAggregateInputType;
    _max?: ApprovalLogMaxAggregateInputType;
};
export type ApprovalLogGroupByOutputType = {
    id: string;
    targetType: $Enums.Role;
    targetId: string;
    oldStatus: $Enums.Status;
    newStatus: $Enums.Status;
    actionById: string | null;
    createdAt: Date;
    _count: ApprovalLogCountAggregateOutputType | null;
    _min: ApprovalLogMinAggregateOutputType | null;
    _max: ApprovalLogMaxAggregateOutputType | null;
};
type GetApprovalLogGroupByPayload<T extends ApprovalLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalLogGroupByOutputType[P]>;
}>>;
export type ApprovalLogWhereInput = {
    AND?: Prisma.ApprovalLogWhereInput | Prisma.ApprovalLogWhereInput[];
    OR?: Prisma.ApprovalLogWhereInput[];
    NOT?: Prisma.ApprovalLogWhereInput | Prisma.ApprovalLogWhereInput[];
    id?: Prisma.StringFilter<"ApprovalLog"> | string;
    targetType?: Prisma.EnumRoleFilter<"ApprovalLog"> | $Enums.Role;
    targetId?: Prisma.StringFilter<"ApprovalLog"> | string;
    oldStatus?: Prisma.EnumStatusFilter<"ApprovalLog"> | $Enums.Status;
    newStatus?: Prisma.EnumStatusFilter<"ApprovalLog"> | $Enums.Status;
    actionById?: Prisma.StringNullableFilter<"ApprovalLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalLog"> | Date | string;
    actionBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type ApprovalLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    actionById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    actionBy?: Prisma.UserOrderByWithRelationInput;
};
export type ApprovalLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ApprovalLogWhereInput | Prisma.ApprovalLogWhereInput[];
    OR?: Prisma.ApprovalLogWhereInput[];
    NOT?: Prisma.ApprovalLogWhereInput | Prisma.ApprovalLogWhereInput[];
    targetType?: Prisma.EnumRoleFilter<"ApprovalLog"> | $Enums.Role;
    targetId?: Prisma.StringFilter<"ApprovalLog"> | string;
    oldStatus?: Prisma.EnumStatusFilter<"ApprovalLog"> | $Enums.Status;
    newStatus?: Prisma.EnumStatusFilter<"ApprovalLog"> | $Enums.Status;
    actionById?: Prisma.StringNullableFilter<"ApprovalLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalLog"> | Date | string;
    actionBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type ApprovalLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    actionById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ApprovalLogCountOrderByAggregateInput;
    _max?: Prisma.ApprovalLogMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalLogMinOrderByAggregateInput;
};
export type ApprovalLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalLogScalarWhereWithAggregatesInput | Prisma.ApprovalLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalLogScalarWhereWithAggregatesInput | Prisma.ApprovalLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ApprovalLog"> | string;
    targetType?: Prisma.EnumRoleWithAggregatesFilter<"ApprovalLog"> | $Enums.Role;
    targetId?: Prisma.StringWithAggregatesFilter<"ApprovalLog"> | string;
    oldStatus?: Prisma.EnumStatusWithAggregatesFilter<"ApprovalLog"> | $Enums.Status;
    newStatus?: Prisma.EnumStatusWithAggregatesFilter<"ApprovalLog"> | $Enums.Status;
    actionById?: Prisma.StringNullableWithAggregatesFilter<"ApprovalLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalLog"> | Date | string;
};
export type ApprovalLogCreateInput = {
    id?: string;
    targetType: $Enums.Role;
    targetId: string;
    oldStatus: $Enums.Status;
    newStatus: $Enums.Status;
    createdAt?: Date | string;
    actionBy?: Prisma.UserCreateNestedOneWithoutApprovalLogInput;
};
export type ApprovalLogUncheckedCreateInput = {
    id?: string;
    targetType: $Enums.Role;
    targetId: string;
    oldStatus: $Enums.Status;
    newStatus: $Enums.Status;
    actionById?: string | null;
    createdAt?: Date | string;
};
export type ApprovalLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    newStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actionBy?: Prisma.UserUpdateOneWithoutApprovalLogNestedInput;
};
export type ApprovalLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    newStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    actionById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalLogCreateManyInput = {
    id?: string;
    targetType: $Enums.Role;
    targetId: string;
    oldStatus: $Enums.Status;
    newStatus: $Enums.Status;
    actionById?: string | null;
    createdAt?: Date | string;
};
export type ApprovalLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    newStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    newStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    actionById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalLogListRelationFilter = {
    every?: Prisma.ApprovalLogWhereInput;
    some?: Prisma.ApprovalLogWhereInput;
    none?: Prisma.ApprovalLogWhereInput;
};
export type ApprovalLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApprovalLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    actionById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    actionById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    actionById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalLogCreateNestedManyWithoutActionByInput = {
    create?: Prisma.XOR<Prisma.ApprovalLogCreateWithoutActionByInput, Prisma.ApprovalLogUncheckedCreateWithoutActionByInput> | Prisma.ApprovalLogCreateWithoutActionByInput[] | Prisma.ApprovalLogUncheckedCreateWithoutActionByInput[];
    connectOrCreate?: Prisma.ApprovalLogCreateOrConnectWithoutActionByInput | Prisma.ApprovalLogCreateOrConnectWithoutActionByInput[];
    createMany?: Prisma.ApprovalLogCreateManyActionByInputEnvelope;
    connect?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
};
export type ApprovalLogUncheckedCreateNestedManyWithoutActionByInput = {
    create?: Prisma.XOR<Prisma.ApprovalLogCreateWithoutActionByInput, Prisma.ApprovalLogUncheckedCreateWithoutActionByInput> | Prisma.ApprovalLogCreateWithoutActionByInput[] | Prisma.ApprovalLogUncheckedCreateWithoutActionByInput[];
    connectOrCreate?: Prisma.ApprovalLogCreateOrConnectWithoutActionByInput | Prisma.ApprovalLogCreateOrConnectWithoutActionByInput[];
    createMany?: Prisma.ApprovalLogCreateManyActionByInputEnvelope;
    connect?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
};
export type ApprovalLogUpdateManyWithoutActionByNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalLogCreateWithoutActionByInput, Prisma.ApprovalLogUncheckedCreateWithoutActionByInput> | Prisma.ApprovalLogCreateWithoutActionByInput[] | Prisma.ApprovalLogUncheckedCreateWithoutActionByInput[];
    connectOrCreate?: Prisma.ApprovalLogCreateOrConnectWithoutActionByInput | Prisma.ApprovalLogCreateOrConnectWithoutActionByInput[];
    upsert?: Prisma.ApprovalLogUpsertWithWhereUniqueWithoutActionByInput | Prisma.ApprovalLogUpsertWithWhereUniqueWithoutActionByInput[];
    createMany?: Prisma.ApprovalLogCreateManyActionByInputEnvelope;
    set?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
    disconnect?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
    delete?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
    connect?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
    update?: Prisma.ApprovalLogUpdateWithWhereUniqueWithoutActionByInput | Prisma.ApprovalLogUpdateWithWhereUniqueWithoutActionByInput[];
    updateMany?: Prisma.ApprovalLogUpdateManyWithWhereWithoutActionByInput | Prisma.ApprovalLogUpdateManyWithWhereWithoutActionByInput[];
    deleteMany?: Prisma.ApprovalLogScalarWhereInput | Prisma.ApprovalLogScalarWhereInput[];
};
export type ApprovalLogUncheckedUpdateManyWithoutActionByNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalLogCreateWithoutActionByInput, Prisma.ApprovalLogUncheckedCreateWithoutActionByInput> | Prisma.ApprovalLogCreateWithoutActionByInput[] | Prisma.ApprovalLogUncheckedCreateWithoutActionByInput[];
    connectOrCreate?: Prisma.ApprovalLogCreateOrConnectWithoutActionByInput | Prisma.ApprovalLogCreateOrConnectWithoutActionByInput[];
    upsert?: Prisma.ApprovalLogUpsertWithWhereUniqueWithoutActionByInput | Prisma.ApprovalLogUpsertWithWhereUniqueWithoutActionByInput[];
    createMany?: Prisma.ApprovalLogCreateManyActionByInputEnvelope;
    set?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
    disconnect?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
    delete?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
    connect?: Prisma.ApprovalLogWhereUniqueInput | Prisma.ApprovalLogWhereUniqueInput[];
    update?: Prisma.ApprovalLogUpdateWithWhereUniqueWithoutActionByInput | Prisma.ApprovalLogUpdateWithWhereUniqueWithoutActionByInput[];
    updateMany?: Prisma.ApprovalLogUpdateManyWithWhereWithoutActionByInput | Prisma.ApprovalLogUpdateManyWithWhereWithoutActionByInput[];
    deleteMany?: Prisma.ApprovalLogScalarWhereInput | Prisma.ApprovalLogScalarWhereInput[];
};
export type ApprovalLogCreateWithoutActionByInput = {
    id?: string;
    targetType: $Enums.Role;
    targetId: string;
    oldStatus: $Enums.Status;
    newStatus: $Enums.Status;
    createdAt?: Date | string;
};
export type ApprovalLogUncheckedCreateWithoutActionByInput = {
    id?: string;
    targetType: $Enums.Role;
    targetId: string;
    oldStatus: $Enums.Status;
    newStatus: $Enums.Status;
    createdAt?: Date | string;
};
export type ApprovalLogCreateOrConnectWithoutActionByInput = {
    where: Prisma.ApprovalLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalLogCreateWithoutActionByInput, Prisma.ApprovalLogUncheckedCreateWithoutActionByInput>;
};
export type ApprovalLogCreateManyActionByInputEnvelope = {
    data: Prisma.ApprovalLogCreateManyActionByInput | Prisma.ApprovalLogCreateManyActionByInput[];
    skipDuplicates?: boolean;
};
export type ApprovalLogUpsertWithWhereUniqueWithoutActionByInput = {
    where: Prisma.ApprovalLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalLogUpdateWithoutActionByInput, Prisma.ApprovalLogUncheckedUpdateWithoutActionByInput>;
    create: Prisma.XOR<Prisma.ApprovalLogCreateWithoutActionByInput, Prisma.ApprovalLogUncheckedCreateWithoutActionByInput>;
};
export type ApprovalLogUpdateWithWhereUniqueWithoutActionByInput = {
    where: Prisma.ApprovalLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalLogUpdateWithoutActionByInput, Prisma.ApprovalLogUncheckedUpdateWithoutActionByInput>;
};
export type ApprovalLogUpdateManyWithWhereWithoutActionByInput = {
    where: Prisma.ApprovalLogScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalLogUpdateManyMutationInput, Prisma.ApprovalLogUncheckedUpdateManyWithoutActionByInput>;
};
export type ApprovalLogScalarWhereInput = {
    AND?: Prisma.ApprovalLogScalarWhereInput | Prisma.ApprovalLogScalarWhereInput[];
    OR?: Prisma.ApprovalLogScalarWhereInput[];
    NOT?: Prisma.ApprovalLogScalarWhereInput | Prisma.ApprovalLogScalarWhereInput[];
    id?: Prisma.StringFilter<"ApprovalLog"> | string;
    targetType?: Prisma.EnumRoleFilter<"ApprovalLog"> | $Enums.Role;
    targetId?: Prisma.StringFilter<"ApprovalLog"> | string;
    oldStatus?: Prisma.EnumStatusFilter<"ApprovalLog"> | $Enums.Status;
    newStatus?: Prisma.EnumStatusFilter<"ApprovalLog"> | $Enums.Status;
    actionById?: Prisma.StringNullableFilter<"ApprovalLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalLog"> | Date | string;
};
export type ApprovalLogCreateManyActionByInput = {
    id?: string;
    targetType: $Enums.Role;
    targetId: string;
    oldStatus: $Enums.Status;
    newStatus: $Enums.Status;
    createdAt?: Date | string;
};
export type ApprovalLogUpdateWithoutActionByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    newStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalLogUncheckedUpdateWithoutActionByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    newStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalLogUncheckedUpdateManyWithoutActionByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    newStatus?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    actionById?: boolean;
    createdAt?: boolean;
    actionBy?: boolean | Prisma.ApprovalLog$actionByArgs<ExtArgs>;
}, ExtArgs["result"]["approvalLog"]>;
export type ApprovalLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    actionById?: boolean;
    createdAt?: boolean;
    actionBy?: boolean | Prisma.ApprovalLog$actionByArgs<ExtArgs>;
}, ExtArgs["result"]["approvalLog"]>;
export type ApprovalLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    actionById?: boolean;
    createdAt?: boolean;
    actionBy?: boolean | Prisma.ApprovalLog$actionByArgs<ExtArgs>;
}, ExtArgs["result"]["approvalLog"]>;
export type ApprovalLogSelectScalar = {
    id?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    actionById?: boolean;
    createdAt?: boolean;
};
export type ApprovalLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "targetType" | "targetId" | "oldStatus" | "newStatus" | "actionById" | "createdAt", ExtArgs["result"]["approvalLog"]>;
export type ApprovalLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actionBy?: boolean | Prisma.ApprovalLog$actionByArgs<ExtArgs>;
};
export type ApprovalLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actionBy?: boolean | Prisma.ApprovalLog$actionByArgs<ExtArgs>;
};
export type ApprovalLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actionBy?: boolean | Prisma.ApprovalLog$actionByArgs<ExtArgs>;
};
export type $ApprovalLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalLog";
    objects: {
        actionBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        targetType: $Enums.Role;
        targetId: string;
        oldStatus: $Enums.Status;
        newStatus: $Enums.Status;
        actionById: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["approvalLog"]>;
    composites: {};
};
export type ApprovalLogGetPayload<S extends boolean | null | undefined | ApprovalLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload, S>;
export type ApprovalLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalLogCountAggregateInputType | true;
};
export interface ApprovalLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalLog'];
        meta: {
            name: 'ApprovalLog';
        };
    };
    /**
     * Find zero or one ApprovalLog that matches the filter.
     * @param {ApprovalLogFindUniqueArgs} args - Arguments to find a ApprovalLog
     * @example
     * // Get one ApprovalLog
     * const approvalLog = await prisma.approvalLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalLogFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalLogClient<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ApprovalLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalLogFindUniqueOrThrowArgs} args - Arguments to find a ApprovalLog
     * @example
     * // Get one ApprovalLog
     * const approvalLog = await prisma.approvalLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalLogClient<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApprovalLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalLogFindFirstArgs} args - Arguments to find a ApprovalLog
     * @example
     * // Get one ApprovalLog
     * const approvalLog = await prisma.approvalLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalLogFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalLogClient<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApprovalLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalLogFindFirstOrThrowArgs} args - Arguments to find a ApprovalLog
     * @example
     * // Get one ApprovalLog
     * const approvalLog = await prisma.approvalLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalLogClient<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ApprovalLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalLogs
     * const approvalLogs = await prisma.approvalLog.findMany()
     *
     * // Get first 10 ApprovalLogs
     * const approvalLogs = await prisma.approvalLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const approvalLogWithIdOnly = await prisma.approvalLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApprovalLogFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ApprovalLog.
     * @param {ApprovalLogCreateArgs} args - Arguments to create a ApprovalLog.
     * @example
     * // Create one ApprovalLog
     * const ApprovalLog = await prisma.approvalLog.create({
     *   data: {
     *     // ... data to create a ApprovalLog
     *   }
     * })
     *
     */
    create<T extends ApprovalLogCreateArgs>(args: Prisma.SelectSubset<T, ApprovalLogCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalLogClient<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ApprovalLogs.
     * @param {ApprovalLogCreateManyArgs} args - Arguments to create many ApprovalLogs.
     * @example
     * // Create many ApprovalLogs
     * const approvalLog = await prisma.approvalLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApprovalLogCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ApprovalLogs and returns the data saved in the database.
     * @param {ApprovalLogCreateManyAndReturnArgs} args - Arguments to create many ApprovalLogs.
     * @example
     * // Create many ApprovalLogs
     * const approvalLog = await prisma.approvalLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ApprovalLogs and only return the `id`
     * const approvalLogWithIdOnly = await prisma.approvalLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApprovalLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ApprovalLog.
     * @param {ApprovalLogDeleteArgs} args - Arguments to delete one ApprovalLog.
     * @example
     * // Delete one ApprovalLog
     * const ApprovalLog = await prisma.approvalLog.delete({
     *   where: {
     *     // ... filter to delete one ApprovalLog
     *   }
     * })
     *
     */
    delete<T extends ApprovalLogDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalLogDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalLogClient<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ApprovalLog.
     * @param {ApprovalLogUpdateArgs} args - Arguments to update one ApprovalLog.
     * @example
     * // Update one ApprovalLog
     * const approvalLog = await prisma.approvalLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApprovalLogUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalLogUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalLogClient<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ApprovalLogs.
     * @param {ApprovalLogDeleteManyArgs} args - Arguments to filter ApprovalLogs to delete.
     * @example
     * // Delete a few ApprovalLogs
     * const { count } = await prisma.approvalLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApprovalLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApprovalLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalLogs
     * const approvalLog = await prisma.approvalLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApprovalLogUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApprovalLogs and returns the data updated in the database.
     * @param {ApprovalLogUpdateManyAndReturnArgs} args - Arguments to update many ApprovalLogs.
     * @example
     * // Update many ApprovalLogs
     * const approvalLog = await prisma.approvalLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ApprovalLogs and only return the `id`
     * const approvalLogWithIdOnly = await prisma.approvalLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ApprovalLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ApprovalLog.
     * @param {ApprovalLogUpsertArgs} args - Arguments to update or create a ApprovalLog.
     * @example
     * // Update or create a ApprovalLog
     * const approvalLog = await prisma.approvalLog.upsert({
     *   create: {
     *     // ... data to create a ApprovalLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalLog we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalLogUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalLogUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalLogClient<runtime.Types.Result.GetResult<Prisma.$ApprovalLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ApprovalLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalLogCountArgs} args - Arguments to filter ApprovalLogs to count.
     * @example
     * // Count the number of ApprovalLogs
     * const count = await prisma.approvalLog.count({
     *   where: {
     *     // ... the filter for the ApprovalLogs we want to count
     *   }
     * })
    **/
    count<T extends ApprovalLogCountArgs>(args?: Prisma.Subset<T, ApprovalLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ApprovalLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalLogAggregateArgs>(args: Prisma.Subset<T, ApprovalLogAggregateArgs>): Prisma.PrismaPromise<GetApprovalLogAggregateType<T>>;
    /**
     * Group by ApprovalLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ApprovalLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalLogGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalLogGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ApprovalLog model
     */
    readonly fields: ApprovalLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ApprovalLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApprovalLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actionBy<T extends Prisma.ApprovalLog$actionByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalLog$actionByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ApprovalLog model
 */
export interface ApprovalLogFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalLog", 'String'>;
    readonly targetType: Prisma.FieldRef<"ApprovalLog", 'Role'>;
    readonly targetId: Prisma.FieldRef<"ApprovalLog", 'String'>;
    readonly oldStatus: Prisma.FieldRef<"ApprovalLog", 'Status'>;
    readonly newStatus: Prisma.FieldRef<"ApprovalLog", 'Status'>;
    readonly actionById: Prisma.FieldRef<"ApprovalLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ApprovalLog", 'DateTime'>;
}
/**
 * ApprovalLog findUnique
 */
export type ApprovalLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalLog to fetch.
     */
    where: Prisma.ApprovalLogWhereUniqueInput;
};
/**
 * ApprovalLog findUniqueOrThrow
 */
export type ApprovalLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalLog to fetch.
     */
    where: Prisma.ApprovalLogWhereUniqueInput;
};
/**
 * ApprovalLog findFirst
 */
export type ApprovalLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalLog to fetch.
     */
    where?: Prisma.ApprovalLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApprovalLogs to fetch.
     */
    orderBy?: Prisma.ApprovalLogOrderByWithRelationInput | Prisma.ApprovalLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApprovalLogs.
     */
    cursor?: Prisma.ApprovalLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApprovalLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApprovalLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApprovalLogs.
     */
    distinct?: Prisma.ApprovalLogScalarFieldEnum | Prisma.ApprovalLogScalarFieldEnum[];
};
/**
 * ApprovalLog findFirstOrThrow
 */
export type ApprovalLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalLog to fetch.
     */
    where?: Prisma.ApprovalLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApprovalLogs to fetch.
     */
    orderBy?: Prisma.ApprovalLogOrderByWithRelationInput | Prisma.ApprovalLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApprovalLogs.
     */
    cursor?: Prisma.ApprovalLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApprovalLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApprovalLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApprovalLogs.
     */
    distinct?: Prisma.ApprovalLogScalarFieldEnum | Prisma.ApprovalLogScalarFieldEnum[];
};
/**
 * ApprovalLog findMany
 */
export type ApprovalLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalLogs to fetch.
     */
    where?: Prisma.ApprovalLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApprovalLogs to fetch.
     */
    orderBy?: Prisma.ApprovalLogOrderByWithRelationInput | Prisma.ApprovalLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ApprovalLogs.
     */
    cursor?: Prisma.ApprovalLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApprovalLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApprovalLogs.
     */
    skip?: number;
    distinct?: Prisma.ApprovalLogScalarFieldEnum | Prisma.ApprovalLogScalarFieldEnum[];
};
/**
 * ApprovalLog create
 */
export type ApprovalLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a ApprovalLog.
     */
    data: Prisma.XOR<Prisma.ApprovalLogCreateInput, Prisma.ApprovalLogUncheckedCreateInput>;
};
/**
 * ApprovalLog createMany
 */
export type ApprovalLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalLogs.
     */
    data: Prisma.ApprovalLogCreateManyInput | Prisma.ApprovalLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ApprovalLog createManyAndReturn
 */
export type ApprovalLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * The data used to create many ApprovalLogs.
     */
    data: Prisma.ApprovalLogCreateManyInput | Prisma.ApprovalLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ApprovalLog update
 */
export type ApprovalLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a ApprovalLog.
     */
    data: Prisma.XOR<Prisma.ApprovalLogUpdateInput, Prisma.ApprovalLogUncheckedUpdateInput>;
    /**
     * Choose, which ApprovalLog to update.
     */
    where: Prisma.ApprovalLogWhereUniqueInput;
};
/**
 * ApprovalLog updateMany
 */
export type ApprovalLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalLogs.
     */
    data: Prisma.XOR<Prisma.ApprovalLogUpdateManyMutationInput, Prisma.ApprovalLogUncheckedUpdateManyInput>;
    /**
     * Filter which ApprovalLogs to update
     */
    where?: Prisma.ApprovalLogWhereInput;
    /**
     * Limit how many ApprovalLogs to update.
     */
    limit?: number;
};
/**
 * ApprovalLog updateManyAndReturn
 */
export type ApprovalLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * The data used to update ApprovalLogs.
     */
    data: Prisma.XOR<Prisma.ApprovalLogUpdateManyMutationInput, Prisma.ApprovalLogUncheckedUpdateManyInput>;
    /**
     * Filter which ApprovalLogs to update
     */
    where?: Prisma.ApprovalLogWhereInput;
    /**
     * Limit how many ApprovalLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ApprovalLog upsert
 */
export type ApprovalLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the ApprovalLog to update in case it exists.
     */
    where: Prisma.ApprovalLogWhereUniqueInput;
    /**
     * In case the ApprovalLog found by the `where` argument doesn't exist, create a new ApprovalLog with this data.
     */
    create: Prisma.XOR<Prisma.ApprovalLogCreateInput, Prisma.ApprovalLogUncheckedCreateInput>;
    /**
     * In case the ApprovalLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApprovalLogUpdateInput, Prisma.ApprovalLogUncheckedUpdateInput>;
};
/**
 * ApprovalLog delete
 */
export type ApprovalLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
    /**
     * Filter which ApprovalLog to delete.
     */
    where: Prisma.ApprovalLogWhereUniqueInput;
};
/**
 * ApprovalLog deleteMany
 */
export type ApprovalLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalLogs to delete
     */
    where?: Prisma.ApprovalLogWhereInput;
    /**
     * Limit how many ApprovalLogs to delete.
     */
    limit?: number;
};
/**
 * ApprovalLog.actionBy
 */
export type ApprovalLog$actionByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * ApprovalLog without action
 */
export type ApprovalLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalLog
     */
    select?: Prisma.ApprovalLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalLog
     */
    omit?: Prisma.ApprovalLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalLogInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ApprovalLog.d.ts.map